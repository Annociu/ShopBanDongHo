import { message } from "antd";

const success = (mes = "Thành Công") => {
  message.success(mes);
};

const error = (mes = "Lỗi") => {
  message.error(mes);
};

const warning = (mes = "Cảnh Báo") => {
  message.warning(mes);
};

export { success, error, warning };
