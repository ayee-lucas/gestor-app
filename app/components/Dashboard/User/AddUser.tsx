import React, { useState } from "react";
import FormUser from "./Form";
import { IUser } from "@/app/models/User";

const AddUser = (props: any) => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSave = async () => {
    const newUser: IUser = {
      name,
      surname,
      username,
      email,
      password,
      role
    };

    try {
      const res = await fetch("/api/User/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) throw new Error(res.statusText);
      
      console.log(newUser)

      // Lógica adicional después de guardar el servicio...

      props.setTrigger(false);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  }

  return props.trigger ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000066] flex justify-center items-center ">
      <div className="relative p-0 w-[100%] max-w-[890px] rounded-lg sm:p-5 dark:bg-gray-800 bg-white ">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-md ">
          <h2 className="text-xl pb-2 text-gray-700 dark:text-white font-semibold capitalize">
            Add User:
          </h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <FormUser
                name="Name"
                type="text"
                value={name}
                onChange={(e:any) => setName(e.target.value)}
              />
              <FormUser
                name="Surname"
                type="text"
                value={surname}
                onChange={(e:any) => setSurname(e.target.value)}
              />
              <FormUser
                name="Username"
                type="text"
                value={username}
                onChange={(e:any) => setUsername(e.target.value)}
              />
              <FormUser
                name="Email"
                type="text"
                value={email}
                onChange={(e:any) => setEmail(e.target.value)}
              />
              <FormUser
                name="Password"
                type="text"
                value={password}
                onChange={(e:any) => setPassword(e.target.value)}
              />
              <FormUser
                name="Role"
                type="text"
                value={role}
                onChange={(e:any) => setRole(e.target.value)}
              />
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => props.setTrigger(false)}
                className="px-1 py-2 bg-gray-00 text-gray-800 dark:text-gray-300 rounded-md bg-slave-700 dark:hover:text-white hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddUser;
