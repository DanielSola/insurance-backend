import { selectRequestHistory } from "repositories";

const blGetRequestHistory = async () => {
  const requestHistory = await selectRequestHistory({});

  return { history: requestHistory };
};

export default blGetRequestHistory;
