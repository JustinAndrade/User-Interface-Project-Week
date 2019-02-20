
class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab
      this.itemElement = document.querySelector(`.tabs-link[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', this.select.bind(this));
    };
  
    select() {
      const links = this.element.querySelectorAll('.service-tab');
  
      Array.from(links).forEach(element  => {    
        element.classList.remove('service-tab-selected');
      });
  
      this.element.classList.add('service-tab-selected');
      
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-link')
      items.forEach(item => item.classList.remove('tabs-link-selected'));  
      console.log(this.items);
      this.element.classList.add('tabs-link-selected');
      console.log(this.element);
    }
  }

  links = document.querySelectorAll('.service-tab');
  
  links.forEach(link =>  new TabLink(link));
  
  