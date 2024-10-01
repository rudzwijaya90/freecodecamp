const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');


const taskData = JSON.parse(localStorage.getItem('data')) || [];

let currentTask = {};

const addOrUpdateTask = () => {
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
      id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
      title: titleInput.value,
      date: dateInput.value,
      description: descriptionInput.value,
    };
  
    if (dataArrIndex === -1) {
      taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }
    localStorage.setItem('data', JSON.stringify(taskData));
    updateTaskContainer();
    reset();
  };

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
    taskData.forEach(
        ({ id, title, date, description }) => {
            tasksContainer.innerHTML += `
            <div class="task" id="${id}">
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Description:</strong> ${description}</p>
              <button type="button" class="btn" onclick="editTask(this)">Edit</button>
              <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
            </div>
          `
        }
      );
};

const deleteTask = (buttonEl) => {
    //findIndex()method takes a function as an argument, which we commonly refer to as a callback function. That means that everything inside the parens for the findIndex argument must be a function.
    const dataArrIndex = taskData.findIndex(item  => item.id === buttonEl.parentElement.id)
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem('data', JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id); 
    currentTask = taskData[dataArrIndex];
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    addOrUpdateTaskBtn.innerText = 'Update Task';
    taskForm.classList.toggle('hidden');
}


const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
}

    if(taskData.length){
        updateTaskContainer();
    }

//event listener with openTaskFormBtn variable and click event argument, with callback function
openTaskFormBtn.addEventListener("click", () => 
    taskForm.classList.toggle("hidden");
  );

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    //confirmCloseDialog.showModal();
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
    if (formInputsContainValues){
        confirmCloseDialog.showModal()  && formInputValuesUpdated;;
    } else {
        reset();
    }
  });

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
  });

discardBtn.addEventListener('click', () => {
    confirmCloseDialog.close();
    reset();
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //const dataArrIndex = taskData.findIndex((item) => item.id===currentTask.id);
    /* const taskObj = {
        id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`, //add embedded expression
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };
    if(dataArrIndex === -1){
        taskData.unshift(taskObj);
      }   */
     
        /* taskData.forEach(
            ({ id, title, date, description }) => {
                tasksContainer.innerHTML += `
                <div class="task" id="${id}">
                  <p><strong>Title:</strong> ${title}</p>
                  <p><strong>Date:</strong> ${date}</p>
                  <p><strong>Description:</strong> ${description}</p>
                  <button type="button" class="btn">Edit</button>
                  <button type="button" class="btn">Delete</button>
                </div>
              `
            }
          ); */
        
        //  reset()
        addOrUpdateTask();
        });

        /* const myTaskArr = [
            { task: "Walk the Dog", date: "22-04-2022" },
            { task: "Read some books", date: "02-11-2023" },
            { task: "Watch football", date: "10-08-2021" },
          ];
          localStorage.setItem("data", JSON.stringify(myTaskArr));
          //console.log(myTaskArr);
          const getTaskArr = localStorage.getItem('data');
          console.log(getTaskArr);

          const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
          console.log(getTaskArrObj); */

        // localStorage.removeItem('data');
        // localStorage.clear();