import { Button, Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
// import clsx from 'clsx'
// import axios from 'axios'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'

const message: Record<number, string> = {
	1: 'A journey, long desired, shall unfold near the turning of the next moon. Trust your instincts and pack your bags.',
	2: 'A helping hand you once offered shall return, threefold, in your time of need. Remember, kindness is a seed that always grows.',
	3: 'Do not fear the storm clouds gathering on the horizon. They bring with them a powerful wind that will clear your path.',
	4: 'A creative spark ignites within you. Embrace it, nurture it, and watch as it transforms your world in brilliant hues.',
	5: 'Listen closely to the whispers of the wind. They carry a message from a loved one, a message of comfort and support.',
	6: 'Patience is a bitter herb, but its roots hold the promise of sweet success. Do not pluck the fruit before it\'s ripe.',
	7: 'Let go of burdens you cling to. They weigh you down and dim your inner light. Release them, and find freedom.',
	8: 'A chance encounter sparks a new friendship, one filled with laughter and shared dreams. Open your heart and welcome it in.',
	9: 'Obstacles on your path are not meant to deter you, but to test your resolve. Persevere, and your strength will be rewarded.',
	10: 'The greatest treasure lies not at the end of the rainbow, but within yourself. Look inward, and discover the magic that awaits',
}


function App() {
	const [isClicked, setIsClicked] = useState<boolean>(false)
	const [isZoom, setIsZoom] = useState<boolean>(false)
	const [isZoomOut, setIsZoomOut] = useState<boolean>(false)
	const [messageNumber, setMessageNumber] = useState<number | null>(null)

	useEffect(() => {
		if (window.location.pathname !== '/') {
			const input_number = window.location.pathname.slice(1)
			if (input_number in message) {
				setMessageNumber(parseInt(input_number))
				setIsZoomOut(true)
			}
		}
	}, [])

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
									const randomNumber = Math.floor(Math.random() * 10) + 1
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
