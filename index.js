// Vue Instance (Template Syntax)
new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!'
  }
});

// Class & Style Bindings
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

// Conditional Rendering
new Vue({
  el: '#app-conditional',
  data: { seen: true }
});

// List Rendering
new Vue({
  el: '#app-list',
  data: {
    todos: ['Learn Vue', 'Practice examples', 'Build projects']
  }
});

// Event Handling
new Vue({
  el: '#app-event',
  data: { count: 0 },
  methods: {
    reset() {
      this.count = 0;
    }
  }
});

// Form Input Bindings
new Vue({
  el: '#app-form',
  data: {
    name: '',
    isChecked: false,
    selected: ''
  }
});
