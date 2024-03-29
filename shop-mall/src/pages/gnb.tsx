import { Link } from 'react-router-dom'
import '../../scss/index.scss'

const Gnb = () => (
	<nav className="gnb">
		<ul>
			<li>
				<Link to="/">홈</Link>
			</li>
			<li>
				<Link to="/products">상품 목록</Link>
			</li>
			<li>
				<Link to="/cart">장바구니</Link>
			</li>
		</ul>
	</nav>
)

export default Gnb
