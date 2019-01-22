import HttpServer from "../server-config";

let module = {
  getList: () => {
    return HttpServer.get(
      "https://www.easy-mock.com/mock/5b3f0b68a374a624438211c9/chatList"
    );
  }
};

export default module;
