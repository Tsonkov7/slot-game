import config from './config';
import { Slot } from './Slot';
import { ConsoleResultFormatter } from './helpers/ConsoleResultFormatter';

function main(): void {
  const slot = new Slot(config);
  const result = slot.spin();
  const formattedOutput = ConsoleResultFormatter.format(result);
  console.log(formattedOutput);
}

main();

