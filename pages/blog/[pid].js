import { useRouter } from 'next/router'
const BlogItem = () => {
    const router = useRouter()
  const { pid } = router.query
    return ( 
        <div>
            BlogItem{pid}
        </div>
     );
}
 
export default BlogItem;