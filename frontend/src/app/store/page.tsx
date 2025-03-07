import { Col, Row } from "react-bootstrap";
import UserTable from "@/components/store";
export default async function Home() {
  return (
    <Row>
      <UserTable />
    </Row>
  );
}
