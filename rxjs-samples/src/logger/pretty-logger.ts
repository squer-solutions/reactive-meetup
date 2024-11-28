type Color = 'yellow'|'blue'|'red'|'green'|'purple'|'cyan';

export class PrettyLogger {
    log(message: any, color?: Color) {
        const colorCode = this.getColor(color);
        console.log(`  ${colorCode}${message}`);
    }

    private getColor(color?: Color): string {
      if(!color) {
        return ""
      }
        switch (color) {
          case 'red':
            return '\u001b[1;31m'
            
          case 'green':
            return '\u001b[1;32m'
            
          case 'yellow':
            return '\u001b[1;33m'
            
          case 'blue':
            return '\u001b[1;34m'
            
          case 'purple':
            return '\u001b[1;35m'
            
          case 'cyan':
            return '\u001b[1;36m'
        
          default:
            return ""
        }
    }
  }

  export const logger = new PrettyLogger();