export default {
  name: 'App',
  data () {
    return {
      isOpen: true,
      accordianList: {},
      selectedAccordion: 0
    }
  },
  methods: {
    getList () {
      fetch('http://www.mocky.io/v2/5bd011763100004b00afcbb7').then(function (res) {
        return res.json()
      }).then(res => {
        this.accordianList = res.data
      })
    },
    toggleAccordion (i) {
       if(this.selectedAccordion == i) {
        this.selectedAccordion = null;
      } else {
        this.selectedAccordion = i
      }
    },
    isAccordionOpen (i) {
      return  i == this.selectedAccordion;
    }
  },
  mounted () {
    this.getList()
  }
}