export const defaultState = {
  users: [
    {
      id: "User1",
      name: "Denela",
    },
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "User1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "User1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "User1",
    },
  ],
  tasks: [
    {
      name: "Upload Your Documents",
      id: "T1",
      group: "G1",
      owner: "User1",
      isComplete: false,
    },
    {
      name: "Add a valid postal address",
      id: "T2",
      group: "G2",
      owner: "User1",
      isComplete: true,
    },
    {
      name: "Add your next of keen",
      id: "T3",
      group: "G3",
      owner: "User1",
      isComplete: true,
    },
    {
      name: "Add your NBT results",
      id: "T4",
      group: "G4",
      owner: "User1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "User1",
      id: "C1",
      task: "T1",
      content: "U are doing good so far dwag",
    },
  ],
};
