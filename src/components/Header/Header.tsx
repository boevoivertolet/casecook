import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Clock } from '../../features/Clock/Clock'

import { AuthUserType } from '../../reducers/authReducer'
import s from './Header.module.css'
export const Header = (props: HeaderPropsType) => {
	return (
		<div className={s.header}>
			<div className={s.logoBlock}>
				<img
					className={s.logo}
					src='https://creativecommons.org/images/deed/logo-cc-heart-white.png'
					alt='logo'
				/>
				<span>Casecook</span>
			</div>
			<div className={s.time}>
				<Clock />
			</div>
			<div className={s.loginName}>
				{props.authUser.login ? (
					props.authUser.login
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</div>
	)
}

type HeaderPropsType = {
	authUser: AuthUserType
}
