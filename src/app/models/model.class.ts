export abstract class Model {

  private callbacks:Function[] = [];

  subscribe(handleChange:Function):Function {
    // Подписка на изменение состояния в объекте через метод dispatch
    this.callbacks.push(handleChange);
    return ()=>{this.callbacks = this.callbacks.filter(cb=>cb != handleChange)}
  }

  protected applyChanges(changes:{}) {
    for(let key of Object.keys(changes)) {
      if(this[key] != changes[key]) {
        this[key] = changes[key]
      }
    }
  }

  dispatch(obj:{}) {
    // Изменяет состояние объекта
    this.applyChanges(obj);
    this.forceUpdate()
  }

  forceUpdate() {
    // сигнал на обновление объекта
    this.callbacks.forEach(cb=>cb(this))
  }
}
