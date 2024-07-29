// var state = {
// tasklist :[
// {  imageurl:"",
//    tasktitle:"",
//    tasktype:"",
//    taskDescription:""
// },
// {  imageurl:"",
//    tasktitle:"",
//    tasktype:"",
//    taskDescription:""
// },
// {  imageurl:"",
//    tasktitle:"",
//    tasktype:"",
//    taskDescription:""
// },
// {  imageurl:"",
//    tasktitle:"",
//    tasktype:"",
//    taskDescription:""
// },
// {  imageurl:"",
//    tasktitle:"",
//    tasktype:"",
//    taskDescription:""
// },

// }}


const state = {
    tasklist: []
};

// DOM operations
const task__contents = document.querySelector(".task__contents");
const task__model = document.querySelector(".task__model__body");

// Template for the card on screen
const htmlTaskContents = ({ id, title, description, type, url }) => {
    return `
    <div class="col-md-6 col-lg-4 mt-3" id="${id}">
        <div class="card shadow-sm task-card">
            <div class="card-header d-flex justify-content-end task__card__header">
                <button type="button" class="btn btn-outline-primary mr-1.5" name="${id}">
                    <i class="fas fa-pencil-alt" name="${id}"></i>
                </button>
                <button type="button" class="btn btn-outline-primary mr-1.5" name="${id}">
                    <i class="fas fa-trash-alt" name="${id}"></i>
                </button>
            </div>
            <div class="card-body">
                ${
                    url ? 
                    `<img width="100%" src="${url}" alt="card image" class="card-img-top mb-3 rounded-lg" />` :
                    ''
                }
                <h4 class="card-title task-card-title">${title}</h4>
                <p class="card-text trim-3-lines text-muted">${description}</p>
                <div class="tags text-white d-flex wrap">
                <span>
                class="badge bg-primary m-1" ${type}</span>
                </div>
            </div>
            <div class="card-footer">
            <button type="button" class="btn btn outline primary float-right" data-bus-toggel="model"  data-bus-target="showtask">open task</button>
            </div>
        </div>
    </div>`;
};


//model body on  - click of the open task `
<div id="${id}">
    ${
        url ?
        `<img width="100%" src="${url}" alt="Card Image" class="img-fluid placeholder__image mb-3" />` :
        ""
    }
    <strong class="text-muted text-sm">Created on: ${date.toDateString()}</strong>
    <h2 class="my-3">${title}</h2>
    <p class="text-muted">${description}</p>
</div>



const updateLocalStorage = () => {
    localStorage.setItem(
        "task",
        JSON.stringify({
            tasks: state.tasklist,
        })
    );
};

// Load Initial Data -->
