import { createContext, useState } from "react";

export let myContext = createContext();
export let DataContext = function ({ children }) {
    const [toggle, setToggle] = useState(null);
    const [change, setChange] = useState(false)     // form
    const users = [
      { id: 1, name: "Alice", status: "online" },
      { id: 2, name: "Bob", status: "online" },
      { id: 3, name: "Charlie", status: "online" },
      { id: 4, name: "David", status: "online" },
    ];
    const [formdata, setFormdata] = useState([])

  return <myContext.Provider value={{toggle,setToggle,change,setChange,users,formdata,setFormdata}}>{children}</myContext.Provider>;
};
