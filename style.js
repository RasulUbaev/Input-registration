tailwind.config = {
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    md: "4rem",
                    xl: '4rem',
                    '2xl': '5rem',
                    '3xl': '6rem',
                },
                screens: {
                    'xsm': "370px",
                    'sm': "504px",
                    'md': "688px",
                    'lg': "864px",
                    'xl': "1088px",
                    "2xl": "1260px",
                    "3xl": "1392px"
                }
            },
            
            screens: {
                'xsm': "370px",
                'sm': "504px",
                'md': "688px",
                'lg': "864px",
                'xl': "1088px",
                "2xl": "1260px",
                "3xl": "1392px",
            },

            fontFamily: {
                'alata': ['Alata, sans-serif'],
            },

            width: {
                '113': '250rem',
              },

            
         
            screens: {
                'xsm': "370px",
                'sm': "504px",
                'md': "688px",
                'lg': "864px",
                'xl': "1088px",
                "2xl": "1260px",
                "3xl": "1392px",
            },
            colors: {
                "pink": "rgb(250,121,120)",
                "btnBg": "rgb(55,204,138)",
                "border": "rgb(210,209,216)",   
                 "blue":  "rgb(93,84,163)",           
            },

            fontSize: {
                nav: ['0.9375rem', {
                    lineHeight: '0.64rem',
                    fontWeight: '400',
                }],
            },

            padding: {
                'px': '320px',
                'pxB': '300px',
              },


              backgroundImage: {
                'bg-round': "url('/images/bg-intro-desktop.png')",
              },
              
              boxShadow: {
                'shadow': `4px 4px 8px 0px rgba(34, 60, 80, 0.2)`,
              }
        }
        
    }
}
