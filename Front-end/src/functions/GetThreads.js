const DUMMY_THREADS = [
    {
        id: 't1',
        creator: 'u1',
        subject: 'A whole essay on why you should eat an apple a day',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque nec laoreet mollis. Suspendisse ac mollis ipsum. Vestibulum volutpat vel lorem quis lobortis. Praesent suscipit euismod est at efficitur. ',
        answers: [
            {
                id: 'a1',
                answer: 'Literally no one gives a damn. I just ratioed your entire post. Like Oh my goodness gracious the world is goign to fall appart like I am so emo right now ok my bad im sorry for uhhhhh breaking your feelings ok bye',
                creator: 'u3',
                upvotes: 5186,
                downvotes: 0,
            },
            {
                id: 'a2',
                answer: 'Pickle Juice?',
                creator: 'u2',
                upvotes: 2,
                downvotes: 50,
            },
        ],
    },
    {
        id: 't2',
        creator: 'u2',
        subject: 'Bananas suck and here is why',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque nec laoreet mollis. Suspendisse ac mollis ipsum. Vestibulum volutpat vel lorem quis lobortis. Praesent suscipit euismod est at efficitur. ',
        answers: [],
    },
];

const GetThreads = () => {

    fetch('http://localhost:8080/api/threads/all')
    .then(response => {
        return response.join();
    })
    .catch((error) => {
        return DUMMY_THREADS;
      }
    )
};

export default GetThreads;
