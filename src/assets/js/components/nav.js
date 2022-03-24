import {getElement} from "bootstrap/js/src/util";


class Nav{
  constructor(element) {
    element = getElement(element)
    if (!element) {
      return
    }
    this._element = element
  }

}
export default Class