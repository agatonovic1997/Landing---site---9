const app = Vue.createApp({
    data() {
        return {
            month: '',
            year: '',
            cardNumber: '',
            cardNumber1: '',
            cardNumber2: '',
            cardNumber3: '',
            cardNumber4: '',
            textInput: '',
        }
    },

    methods: {

        validateInput(field, max) {
            let num = String(this[field]);
            if (isNaN(num) || num < 1 || num > max) {
                this[field] = '';
            } else {
                this[field] = this[field].replace(/[^0-9]/g, '');
                if (this[field].length > 2) {
                    this[field] = this[field].slice(0, 2);
                }
                if (this[field].length === 1 && this[field] !== '0' && this[field] !== '1') {
                    this[field] = '0' + this[field];
                }
            }
        },

        validateInput_2() {

            this.year = this.year.replace(/[^0-9]/g, '');

            let num = parseInt(this.year);

            if (isNaN(num) || num < 1 || num > 99) {
                this.year = '';
            } else {
                this.year = num < 10 ? '0' + num : String(num);
            }
        },



        formatCardNumber() {
            let numbers = this.cardNumber.replace(/[^0-9]/g, '');
            if (numbers.length > 16) {
                numbers = numbers.slice(0, 16);
            }
            this.cardNumber1 = numbers.slice(0, 4);
            this.cardNumber2 = numbers.slice(4, 8);
            this.cardNumber3 = numbers.slice(8, 12);
            this.cardNumber4 = numbers.slice(12, 16);
            this.cardNumber = `${this.cardNumber1} ${this.cardNumber2} ${this.cardNumber3} ${this.cardNumber4}`.trim();
        },

        validateTextInput() {
            this.textInput = this.textInput.replace(/[0-9.,]/g, '');
        }

    },

});

app.mount('#app');