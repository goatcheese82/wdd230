const colors = {
   main: '#b9b9cc',
   secondary: '#55559a'
}

const styles = {
   cards: {
      card: {
         background: colors.main,
         border: `2px solid ${colors.secondary}`,
      },
      h2: {
         color: '#55559a',
      },
      p: {

      },
      image: {
         boxShadow: '0px 0px 8px black',
         width: '60%'
      },
   },

   body: {
      textAlign: 'center',
      color: colors.secondary,
   },
   
   main: {
      boxShadow: '0px 0px 8px black',
      padding: '10px',
   },

   doc: {
      large: {
         backgroundColor: 'white',
         display: 'grid',
         gridTemplateColumns: '1fr 1fr 1fr 1fr',
         textAlign: 'center',
         gridGap: '4px',
      },
      medium: {
         backgroundColor: 'white',
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         textAlign: 'center',
         gridGap: '4px',
      },
      small: {
         backgroundColor: 'white',
         display: 'grid',
         gridTemplateColumns: '1fr',
         textAlign: 'center',
         gridGap: '4px',

      }
   }
}

export default styles;