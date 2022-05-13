import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number, doUpperCase: boolean): string {
    if (value.length > limit) {
      value = value.substr(0, limit) + "...";
    }
    if (doUpperCase) {
      value = value.toUpperCase();
    }
    return value;
  }
}
