const express = require('express');
const router = express.Router();

const {
    getTopCrimeCategory,
    getDangerousLocations,
    getFugitiveOffenders,
    getCrimesWithMostWitnesses,
    getCrimesWithVictimsAndOffenders,
    getMostCommonOffenderAges,
    getMonthlyCrimeTrends,
    getRegionWiseCrimeStats,
    getHighProfileUnsolvedCases,
    getCrimeRateByTimeOfDay,
    getRepeatOffenders,
    getMostFrequentCrimeLocations
} = require("../controllers/analyticsController");

router.get('/top-crime-category', getTopCrimeCategory);
router.get('/dangerous-locations', getDangerousLocations);
router.get('/fugitives', getFugitiveOffenders);
router.get('/most-witnesses', getCrimesWithMostWitnesses);
router.get('/victims-offenders', getCrimesWithVictimsAndOffenders);
router.get('/common-offender-ages', getMostCommonOffenderAges);
router.get('/monthly-trends', getMonthlyCrimeTrends);
router.get('/region-wise-stats', getRegionWiseCrimeStats);
router.get('/unsolved-cases', getHighProfileUnsolvedCases);
router.get('/crime-rate-time', getCrimeRateByTimeOfDay);
router.get('/repeat-offenders', getRepeatOffenders);
router.get('/frequent-crime-locations', getMostFrequentCrimeLocations);

module.exports = router;
