import React, {useState, useEffect} from 'react';
//import { Pagination } from '@mui/material/Pagination';
import { Box, Typography, Stack, Pagination } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({exercises, setExercises, bodyPart}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 12;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({top: 1800, behavior: 'smooth'});
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if(bodyPart === 'all'){
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            }else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        }
        fetchExercisesData();
    }, [bodyPart]);

    return (
        <Box id="exercises"
            sx={{mt: {lg:'75px'}}}
            mt="50px"
            p="20px"
        >
            <Typography variant='h4' mb='46px'>
                Showing Results
            </Typography>
            <Stack direction="row" sx={{gap:{lg:'75px', xs:'50px'}}} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack display="flex" justifyContent="center">
                {exercises.length > 12 && (
                    <Pagination 
                        color="standard"
                        shape="rounded"
                        defaultPage = {1}
                        count = {Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="small"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises;
