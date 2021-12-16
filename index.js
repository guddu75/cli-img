#!/usr/bin/env node

/**
 * 
 * @author Debapriya Majumder
 * 
 */

const resizeOptimizeImages = require('resize-optimize-images');
const alerts = require('terminal-alerts');
const globby = require('globby');
const ora = require('ora');
const { yellow : y , green :g} = require('chalk');



const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const spinner = ora({ text : ``});

const { clear , debug , source , width , quality} = flags;


(async () => {

    init({clear});
    input.includes(`help`) && cli.showHelp(0);

    if(source){
        const images = await globby(source);
        const options = {
            images,
            width : width ? width : 1920,
            quality : quality ? quality : 90
        };
        spinner.start(
            `${y(` RUNNING `)} optim and resize task on ${images.length}`
        );
        await resizeOptimizeImages(options);
        spinner.succeed(
            `${g(` COMPLETED `)} optim and resize task on ${images.length}`
        )
        console.log();
    }else{
        alerts({
            type : `error`,
            msg : `You forgot to use source flag`
        })
    }

    debug && log(flags);

})();