import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { cid } = router.query

  return <p>CourseID: {cid}</p>
}



export default Post