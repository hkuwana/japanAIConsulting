// Create a writable store for form data
export type FormDataType = {
	industry: string;
	techStack: string[];
	painPoints: string[];
	timeSpent: number;
	companyName: string;
	companySize: string;
	companyDescription: string;
	email: string;
	languagePreference: string;
};

export const formData = $state({
	industry: '',
	techStack: [],
	painPoints: [],
	timeSpent: 0,
	companyName: '',
	companySize: '',
	companyDescription: '',
	email: '',
	languagePreference: 'en'
});
