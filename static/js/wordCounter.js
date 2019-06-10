var wordCounter = {
    'template':
    `
    <div id="wordCounter">
        <h1>WordCounter</h1>
        <textarea v-model="message"></textarea>

        <p>단어수: {{count}}</p>
        <!-- <p>단어수: {{countMethod()}}</p> -->
    </div>
    `,
    data: function(){
        return {
            message: '',
        }
    },
    computed: {
        count: {
            get: function() {
                if(this.message.length === 0)
                    return 0;
                else
                    return this.message.trim().replace(/\s+/g, ' ').split(' ').length;
            },   
            set: function() {
                this.message = 'hohoho';
            }
        }
    },
}

new Vue({
    render: h => h(wordCounter)
}).$mount('#wordcountApp');