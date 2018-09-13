export class Urls {

  /**
   * Api Фильтрации
   * */
  static get urlsNumber() {
    return "/api/ofd/number"
  }

  /**
   * Api Авторизации
   * */
  static get urlsAuthApi() {
    return "/api/ofd/auth"
  }

  /**
   * Api Поисковика
   * */
  static get urlsSearch() {
    return "/api/ofd/search"
  }

  /**
   * Api Уже сопоставленных товаров
   * */
  static get urlsAlready() {
    return "/api/ofd/already"
  }

  /**
   * Api Удаления
   * */
  static get urlsDelete() {
    return "/api/ofd/delete"
  }

  /**
   * Api Сопоставления
   * */
  static get urlsMatching() {
    return "/api/ofd/matching"
  }

  /**
   * Api Отправки отчета
   * */
  static get urlsReport() {
    return "/api/ofd/report"
  }

  /**
   * Api Регистрации
   * */
  static get urlsRegistration() {
    return "/api/ofd/registration"
  }

  /**
   * Api Кол-во оставшихся товаров для сопоставления
   * */
  static get urlsCountWares() {
    return "api/ofd/count-wares"
  }
}
