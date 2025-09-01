new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!'
  }
});

new Vue({
  el: '#app-class',
  data: {
    isActive: false,
    textColor: 'blue',
    size: 20
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  }
});

new Vue({
  el: '#app-conditional',
  data: { seen: true }
});

new Vue({
  el: '#app-list',
  data: {
    todos: ['Learn Vue', 'Practice examples', 'Build projects']
  }
});

new Vue({
  el: '#app-event',
  data: { count: 0 },
  methods: {
    reset() {
      this.count = 0;
    }
  }
});

new Vue({
  el: '#app-form',
  data: {
    name: '',
    isChecked: false,
    selected: ''
  }
});
