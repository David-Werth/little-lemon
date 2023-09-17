import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnderConstruction = () => {
	return (
		<div className="flex flex-col items-center justify-center w-11/12 max-w-5xl gap-12 py-10 text-green">
			<h1 className="text-6xl font-markazi">Page is under construction!</h1>
			<FontAwesomeIcon icon={faScrewdriverWrench} className="h-48" />
		</div>
	);
};

export default UnderConstruction;
