import Link from "next/link";
const ContentBlock = (props: any) => {
	return (
		<>
			<div className="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
				<div className="text px-4 ftco-animate">
					<h2 className="mb-4">{props.content.heading}</h2>
					<p>{props.content.description1}</p>
					<p>{props.content.description2}</p>
					<p><Link href={props.content.Link} className="btn btn-secondary px-4 py-3">{props.content.btn_text}</Link></p>
				</div>
			</div>
		</>
	)
}
export default ContentBlock;