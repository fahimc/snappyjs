import Snappy from "./lib/snappy";
import Title from "./component/title/title";

let Main =
{
  init()
  {
    Snappy.init();
    document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
  },
  onLoaded()
  {

  }
};

Main.init();




