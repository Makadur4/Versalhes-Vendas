import backend from "./backend";
import { ApiException } from "./api-exception";

import TopicosAjuda from "../data/topicos-ajuda";

const AjudaService = {
  obterTopicosAjuda() {
    return TopicosAjuda;
  },
};

export default AjudaService;
