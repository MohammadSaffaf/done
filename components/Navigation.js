import Link from 'next/link'

const Navigation = () => {
    return ( 
        <nav>
            <ul>
                <li>
                <Link href="/faq">
                 <a>Home</a>
                 </Link>
                </li>
                <li>
                <Link href="/contact">
                  <a>FAQ</a>
                </Link>
                </li>
                <li>
                <Link href="/">
          <a>Contact</a>
        </Link>
                </li>
                
            </ul>
            <style jsx>{`
            ul{
                
                display:flex;
                justify-contetnt: space-evenly;
            }
            a{
                color: lime;
            }
            a:hover{
                transform: scale(1,1)
            }
            nav {
                background: #333
            }
            `
                
            }

            </style>
        </nav>
     );
}
 
export default Navigation;
