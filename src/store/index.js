import { configure } from "mobx";
import counter from "./modules/counter";

configure({ enforceActions: "observed" });

const store = { counter };

export default store;
