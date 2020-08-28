
const frame = {
    variants: function () {
       return {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
       }
    }
  
}

export default frame;