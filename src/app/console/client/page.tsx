"use client";

import {
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  List,
  Modal,
  Row,
  Tag,
  Tooltip,
  message,
} from "antd";
import ClientCard, { AddClientCard } from "./ClientCard";
import {
  useClientTasks,
  useJoinMarket,
  useUserClients,
} from "@/contexts/useContract";
import { useWeb3Context } from "@/contexts/web3";
import { useState } from "react";
import { unix } from "dayjs";
import { useForm } from "antd/es/form/Form";
import { LinkOutlined, QuestionCircleOutlined } from "@ant-design/icons";

export default function Client() {
  const { marketContract } = useWeb3Context();
  const { userClients: clients, refreshList } = useUserClients(
    marketContract.current
  );
  const [curClient, setCurClient] = useState<number | null>(null);
  const [addClientModal, setAddClientModal] = useState(false);
  return (
    <>
      <Row gutter={[16, 16]}>
        {clients.map((client) => (
          <Col key={client.id} span={8}>
            <ClientCard
              {...client}
              onClick={() => {
                setCurClient(client.id);
              }}
              refreshList={refreshList}
            />
          </Col>
        ))}
        <Col span={8}>
          <AddClientCard
            onClick={() => {
              setAddClientModal(true);
            }}
          />
        </Col>
      </Row>
      <ProofDrawer
        open={curClient != null}
        onClose={() => {
          setCurClient(null);
        }}
        clientId={curClient}
      />
      <AddClientModal
        onAdd={() => {
          setAddClientModal(false);
          refreshList();
        }}
        onClose={() => {
          setAddClientModal(false);
        }}
        open={addClientModal}
      />
    </>
  );
}

function ProofDrawer({
  open,
  onClose,
  clientId,
}: {
  open: boolean;
  onClose: () => void;
  clientId: number | null;
}) {
  const { taskContract } = useWeb3Context();
  const tasks = useClientTasks(clientId, taskContract.current);
  return (
    <Drawer title={"Proof Logs"} open={open} onClose={onClose}>
      <List
        bordered={false}
        dataSource={[...tasks].reverse()}
        renderItem={(item: any) => {
          const statusText = ["Posted", "Assigned", "Done", "Payed", "Slashed"][
            item._stat
          ];
          const tagColor = ["blue", "blue", "green", "green", "red"][
            item._stat
          ];

          return (
            <List.Item className={"flex flex-col items-start"}>
              <div className={"text-2xl font-semibold flex items-center"}>
                {item.uniqID.toString()}{" "}
                <Tag color={tagColor}>{statusText}</Tag>{" "}
                <Tooltip title="Tap to view block detail">
                  <div
                    onClick={() => {
                      window.open(
                        `https://explorer.jolnir.taiko.xyz/search-results?q=${item.uniqID}`,
                        "_blank"
                      );
                    }}
                  >
                    <LinkOutlined />
                  </div>
                </Tooltip>
              </div>
              <div className={"text-sm text-subtle-inverse"}>
                {unix(Number(item.assignTime)).format("YYYY-MM-DD hh:mm:ss")}
              </div>
              <div>
                Rewards(
                {item.reward?.token == 0
                  ? "eth-sepolia"
                  : item.reward?.token.substring(0, 8)}
                ):{" "}
                <span className={"font-bold"}>
                  {item.reward?.amount.toString()} wei
                </span>{" "}
              </div>
            </List.Item>
          );
        }}
      ></List>
    </Drawer>
  );
}

function testServer(url: string) {
  return fetch(`/console/client/test-url?url=${url}`).then((res) => res.json()).then((res: any) => {
    if (res?.status == 200 || res?.status == 204) {
      return Promise.resolve()
    }
    return Promise.reject()
  })
}

function AddClientModal({
  onClose,
  open,
  onAdd,
}: {
  onClose: () => void;
  open: boolean;
  onAdd: () => void;
}) {
  const [form] = useForm();
  const { marketContract } = useWeb3Context();
  const { joinMarket, loading } = useJoinMarket(marketContract.current);
  return (
    <Modal
      title={"Join Market"}
      open={open}
      onCancel={onClose}
      confirmLoading={loading}
      onOk={async () => {
        const v = await form.validateFields();
        try {
          await testServer(v.url);
        } catch (e) {
          message.error("Server Client URL is not valid");
          return;
        }
        await joinMarket(v);
        onAdd();
      }}
    >
      <Form form={form} labelCol={{ span: 8 }}>
        <Form.Item
          label={
            <div>
              Client URL{" "}
              <Tooltip
                title={
                  "The apus docker service request URL. example: http://127.0.0.1:9000"
                }
              >
                <QuestionCircleOutlined />
              </Tooltip>
            </div>
          }
          name={"url"}
          required
          rules={[
            {
              validator: async (_, value) => {
                if (!value) {
                  return Promise.reject("Please input client url");
                }
                if (
                  !value.startsWith("http://") &&
                  !value.startsWith("https://")
                ) {
                  return Promise.reject(
                    "Client url must start with http:// or https://"
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={
            <div>
              Min Fee{" "}
              <Tooltip title={"The minimal fee sequencer should pay for you."}>
                <QuestionCircleOutlined />
              </Tooltip>
            </div>
          }
          name={"minFee"}
          required
          rules={[
            {
              validator: async (_, value) => {
                if (!value) {
                  return Promise.reject("Please input min fee");
                }
                if (Number(value) <= 0) {
                  return Promise.reject("Min fee must be positive");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <InputNumber
            min={0}
            max={10000}
            placeholder={"10"}
            precision={1}
            addonAfter={"wei"}
          />
        </Form.Item>
        <Form.Item
          label={
            <div>
              Max Provers{" "}
              <Tooltip title={"How many prover instances your client can run?"}>
                <QuestionCircleOutlined />
              </Tooltip>
            </div>
          }
          name={"maxZkEvmInstance"}
          required
          rules={[
            {
              validator: async (_, value) => {
                if (!value) {
                  return Promise.reject("Please input max instance");
                }
                if (Number(value) <= 0) {
                  return Promise.reject("Max instance must be positive");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <InputNumber
            min={0}
            max={4}
            step={1}
            precision={1}
            placeholder={"1"}
          />
        </Form.Item>
        <Row>
          <Col span={16} offset={8}>
            <div className={"text-secondary text-xs mt-1"}>
              <p>requires 8c16g each provers</p>
              <table className={"table-border mt-1"}>
                <tbody>
                  <tr>
                    <td></td>
                    <td>16g</td>
                    <td>32g</td>
                    <td>64g</td>
                  </tr>
                  <tr>
                    <td>8c</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>16c</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>32c</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
