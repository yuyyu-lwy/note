
Page({
  data:{
    input:'',
    todos:[],
    allCompleted:false,
    logs:[]
  },

  save:function(){
    wx.setStorageSync('todo_list',this.data.todos)
    wx.setStorageSync('todo_logs', this.data.logs)
  },

  inputChangeHandle:function(e){
    this.setData({input:e.detail.value})
  },

  addTodoHandle:function(e){
    if(!this.data.input||!this.data.input.trim()) return
    var todos = this.data.todos
    todos.push({name:this.data.input,completed:false})
    var logs = this.data.logs
    logs.push({timestamp:new Date(),action:'add',name:this.data.input})
    this.setData({
      input:'',
      todos:todos,
      logs:logs
    })
    this.save()
  },

  removeTodoHandle:function(e){
    var index = e.currentTarget.dataset.index
    var todos = this.data.todos
    var remove = todos.splice(index,1)[0]
    var logs = this.data.logs
    logs.push({timestamp: new Date(),action:'remove',name:remove.name})
    this.setData({
      todos:todos,
      logs:logs
    })
    this.save()
  }
})

