import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



const Cards = ({data : { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Loading ... ';
    }

    return (
        <div className={StyleSheet.container}>
            <Grid container spacing={3} justify='center'>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Infected
                        </Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separation=","
                            />
                        </Typography>

                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>

                        <Typography varaint="body2">
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Recovered
                        </Typography >

                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separation=","
                            />
                        </Typography>

                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>

                        <Typography varaint="body2">
                            Number of Recovered cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Deaths
                        </Typography>

                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separation=","
                            />
                        </Typography>

                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>

                        <Typography varaint="body2">
                            Number of Deaths form covid-19
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>

        
    )
}

export default Cards;