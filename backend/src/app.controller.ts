import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import * as path from 'path';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/stream/:file")
  stream(@Param("file") file: string, @Res() res: Response): any {
    const data = "../hls/music_angela_paulson_dancing_waters_007.m3u8";
    var filename = path.join("../hls/", file);
    if (!fs.existsSync(filename)) {
      console.log(`file not found: ${filename}`);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`file not found: ${filename}\n`);
      res.end();
    }

    console.log('sending file: ' + filename);
    switch (path.extname(filename)) {
      case '.m3u8':
        fs.readFile(filename, function (err, contents) {
          if (err) {
            res.writeHead(500);
            res.end();
          } else if (contents) {
            res.writeHead(200, { 'Content-Type': 'application/vnd.apple.mpegurl' });
            // var ae = req.headers['accept-encoding'];
            // if (ae.match(/\bgzip\b/)) {
            //   zlib.gzip(contents, function (err, zip) {
            //     if (err) throw err;

            //     res.writeHead(200,
            //       { 'content-encoding': 'gzip' });
            //     res.end(zip);
            //   });
            // } else {
            res.end(contents, 'utf-8');
            // }
          } else {
            console.log('emptly playlist');
            res.writeHead(500);
            res.end();
          }
        });
        break;
      case '.ts':
        res.writeHead(200, { 'Content-Type': 'video/MP2T' });
        var stream = fs.createReadStream(filename, { highWaterMark: 64 * 1024 });
        stream.pipe(res);
        break;
      default:
        console.log(`unknown file type: ${path.extname(filename)}`);
        res.writeHead(500);
        res.end();
    }
  }
}
