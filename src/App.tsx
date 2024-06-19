import { Button, Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
// import clsx from 'clsx'
// import axios from 'axios'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'

const message: Record<number, string> = {
	1: `Your wish or hope will come true soon. You just have to have more confidence in yourself and do your best so you don't regret it later.`,
	2: `The problems you are facing will soon be helped by the people you once helped. You just need to open your mind and listen to their opinions.`,
	3: `Stop worry about things that haven't happened yet. You are a talented person that know what the thing that you should do. Choose what ever you think is right, don't hesitate. Your luck has gotten better lately, please believe in yourself.`,
	4: `If you are initiating a new project, or work, start doing it now. The best opportunity is waiting for you and will change your life in the better way. If you do, please give 100% of your energy and you will get back as much as you tried.`,
	5: `If you have to decide on something, please think carefully. Turn around and listen to the opinions and advice from those around you. Something that you very confident with may not always be the right answer.`,
	6: `Life or problems at this moment of your life may be difficult to solve. Please use a lot of patience and things will gradually get better. But unfortunately, don’t forgot to believe in yourself that you can do this.`,
	7: `Sometimes letting go can be a better choice for your life right now.`,
	8: `You are about to encounter new things in life that will bring you joy. If you ask about friends, you will meet new good friends. If you ask about your lover, you will meet that person soon.`,
	9: `You are enjoying your life right now and may leaving some things behind. Please remember to focus on what's important.`,
}


function App() {
	const [isClicked, setIsClicked] = useState<boolean>(false)
	const [isZoom, setIsZoom] = useState<boolean>(false)
	const [isZoomOut, setIsZoomOut] = useState<boolean>(false)
	const [messageNumber, setMessageNumber] = useState<number | null>(null)
	const [isList, setIsList] = useState<boolean>(false)

	useEffect(() => {
		if (window.location.pathname !== '/') {
			const input = window.location.pathname.slice(1)
			if (input in message) {
				setMessageNumber(parseInt(input))
				setIsZoomOut(true)
			} else if (input === 'list') {
				setIsZoomOut(true)
				setIsList(true)
			} else {
				window.history.pushState(null, '', '/')
			}
		}
	}, [])

	if (isList) {
		setTimeout(() => {
			setIsZoomOut(false)
			setIsClicked(false)
		}, 300)

		return (
			<>
				<motion.div
					className="bg-[#B32425] h-screen w-screen fixed top-0 left-0 z-20 flex items-center"
					animate={{
						scale: isZoomOut ? 1 : 0,
					}}
				>
					<img
						src="./logo/Smogator.png"
						alt="Bui Bui Wink at You"
						className="w-1/3 mx-auto"
					/>
				</motion.div>
				<div className="mx-auto py-20 px-5 container flex items-center">
					<div className="w-full text-center">
						<div className="gap-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
							{
								Object.keys(message).map((key) => (
									<Card
										key={key}
										className="mt-5 mx-auto p-2"
									>
										<CardHeader className="justify-center">
											<p
												className="font-bold text-5xl"
											>
												{key}
											</p>
										</CardHeader>
										<Divider />
										<CardBody>
											<p
												className="indent-8"
											>
												{message[parseInt(key)]}
											</p>
											<cite className="block text-right mt-4 text-gray-600">- Bui Bui</cite>
										</CardBody>
									</Card>
								))
							}
						</div>
						<Button
							className="mt-5"
							onClick={() => {
								setMessageNumber(null)
								setIsList(false)
								window.history.pushState(null, '', '/')
							}}
						>
							Back
						</Button>
					</div>
				</div>
			</>
		)
	}

	if (messageNumber !== null && messageNumber in message) {
		setTimeout(() => {
			setIsZoomOut(false)
			setIsClicked(false)
		}, 300)

		return (
			<>
				<motion.div
					className="bg-[#B32425] h-screen w-screen fixed top-0 left-0 z-20 flex items-center"
					animate={{
						scale: isZoomOut ? 1 : 0,
					}}
				>
					<img
						src="./logo/Smogator.png"
						alt="Bui Bui Wink at You"
						className="w-1/3 mx-auto"
					/>
				</motion.div>
				<div className="mx-auto py-20 px-5 container flex items-center">
					<div className="w-full text-center">
						{/* <img
							src="./BuiWink.gif"
							alt="Bui Bui Wink at You"
							className="w-1/4 mx-auto z-30"
							style={{
								top: '-100px',
							}}
						/> */}
						<Card
							className="mt-10 lg:w-1/3 mx-auto p-2"
						>
							<CardHeader className="justify-center">
								<p
									className="font-bold text-5xl"
								>
									{messageNumber}
								</p>
							</CardHeader>
							<Divider />
							<CardBody>
								<p
									className="indent-8"
								>
									{message[messageNumber]}
								</p>
								<cite className="block text-right mt-4 text-gray-600">- Bui Bui</cite>
							</CardBody>
						</Card>
						<Button
							className="mt-5"
							onClick={() => {
								setMessageNumber(null)
								window.history.pushState(null, '', '/')
							}}
						>
							Back
						</Button>
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<motion.div
				className="bg-[#B32425] h-screen w-screen fixed top-0 left-0 z-20 flex items-center"
				animate={{
					scale: isZoom ? 1 : 0,
				}}
			>
				<img
					src="./logo/Smogator.png"
					alt="Bui Bui Wink at You"
					className="w-1/3 mx-auto"
				/>
			</motion.div>
			<div className="py-20 px-5 text-center flex items-center">
				<div className="mx-auto">
					<p
						className="text-9xl"
					>
						Bui Bui Stick
					</p>
					<motion.div
						className="m-10"
						// whileHover={{ scale: isZoom ? 150 : 1.1 }}
						// whileTap={{ scale: isZoom ? 150 : 0.9 }}
						// animate={{ scale: isZoom ? 150 : 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<DotLottiePlayer
							src="https://lottie.host/3c5001b6-7cd0-4fce-bcdc-05b2c4b73078/Yj6LV4QIRD.lottie"
							loop
							autoplay
							className="mt-10 w-1/3 mx-auto cursor-pointer"
							speed={isClicked ? 10 : 1}
							onClick={() => {
								if (isClicked) return
								setIsClicked(true)

								setTimeout(() => {
									setIsZoom(true)
								}, 1500)

								setTimeout(() => {
									const randomNumber = Math.floor(Math.random() * 9) + 1
									setMessageNumber(randomNumber)
									setIsZoom(false)
									setIsZoomOut(true)
									window.history.pushState(null, '', `/${randomNumber}`)
								}, 2000)
							}}
						/>
					</motion.div>
					<p
						className="text-5xl"
					>
						Click to get your luck!
					</p>
				</div>
			</div>
		</>
	)
}

export default App
