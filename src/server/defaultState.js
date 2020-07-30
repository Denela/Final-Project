import md5 from 'md5';

// This object state kinda difenes everthing that the app needs for eaxh user to have  a unique experience
export const defaultState = {
  //session: {
    //authenticated:false
 // },
  // A list of the registered users
  users: [
    {
      id: "User1",
      name: "Denela",
      passwordHarsh:md5("TUPLES")
    },
    {
      id: "User2",
      name: "Boss",
      passwordHarsh:md5("PROFITING")
    },
  ],
  // This is where the tasks that are to be completed belong
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
  // The actual tasks which are either pending, being done, or done
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
  // A little bit of interraction that users and the univeristy can put comments
  comments: [
    {
      owner: "User1",
      id: "C1",
      task: "T1",
      content: "U are doing good so far dwag",
    },
  ],
};
