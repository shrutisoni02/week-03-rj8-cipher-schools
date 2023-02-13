

export const testApi = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a+b);
    }, 15000);
  });
};
let tasks = [
    {
        taskNumber: 1,
        taskName:'Task 1',
        taskDescription: "This is task",
    },
    {
        taskNumber: 2,
        taskName:'Task 1',
        taskDescription: "This is task",
    },
    {
        taskNumber: 3,
        taskName:'Task 1',
        taskDescription: "This is task",
    },
    {
        taskNumber: 4,
        taskName:'Task 1',
        taskDescription: "This is task",
    },
    ];
    export const getAllTasks = () => 
      new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(tasks);
        },3000);
      })
    

// export default testApi
