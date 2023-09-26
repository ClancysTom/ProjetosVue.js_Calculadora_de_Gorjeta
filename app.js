new Vue({
    el: '#app',
    data: {
      billAmount: null,
      tipPercentage: null,
      tip: 0,
      total: 0
    },
    methods: {
      calculateTip: function() {
        const bill = parseFloat(this.billAmount);
        const percentage = parseFloat(this.tipPercentage);
  
        if (!isNaN(bill) && !isNaN(percentage)) {
          const calculatedTip = (bill * (percentage / 100)).toFixed(2);
          this.tip = calculatedTip;
          this.total = (bill + parseFloat(calculatedTip)).toFixed(2);
        } else {
          this.tip = 0;
          this.total = 0;
        }
      }
    }
  });
  