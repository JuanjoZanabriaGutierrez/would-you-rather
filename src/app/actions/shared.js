import { _getQuestions, _getUsers } from '../API/_DATA';
import { setAuthedUser } from '../actions/authedUser';
import {
	receiveUsers,
	addQuestionToUser,
	addQuestionAnswerToUser
} from '../actions/users';
import {
	receiveQuestions,
	addQuestion,
	addQuestionAnswer
} from '../actions/questions';
import {} from '../actions/questions';
import {} from '../actions/users';
import { _saveQuestion, _saveQuestionAnswer } from '../API/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

// const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(hideLoading());
		});
	};
}

export function handleAuthUser(id) {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ questions }) => {
			dispatch(setAuthedUser(id));
			dispatch(receiveQuestions(questions));
			dispatch(hideLoading());
		});
	};
}

export function handleAddQuestion(question) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return _saveQuestion({ ...question, author: authedUser }).then(
			(formattedQuestion) => {
				dispatch(addQuestion(formattedQuestion));
				dispatch(addQuestionToUser(formattedQuestion));
				dispatch(hideLoading());
			}
		);
	};
}

export function handleQuestionAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
			dispatch(addQuestionAnswer({ authedUser, qid, answer }));
			dispatch(addQuestionAnswerToUser({ authedUser, qid, answer }));
		});
	};
}

function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({
			users,
			questions
		})
	);
}
