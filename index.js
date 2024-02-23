let listItems = document.querySelectorAll('.list-item');

    listItems.forEach(item => {
      item.addEventListener('mouseover', function() {
        this.style.color = 'red';
      });

      item.addEventListener('mouseout', function() {
        this.style.color = 'black';
      });
    });
