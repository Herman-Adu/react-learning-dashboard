/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0EyGBV5aW7U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
/* import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select' */
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div
      key='1'
      className='space-y-8 rounded-md border-2 border-gray-300 p-4 shadow-md dark:border-gray-700'
    >
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold'>Contact Me!</h2>
        <p className='text-gray-500 dark:text-gray-400'>
          Please fill the below form and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label
            className='required text-gray-600 dark:text-gray-400'
            htmlFor='name'
          >
            Name
          </Label>
          <Input
            className='border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
            id='name'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='space-y-2'>
          <Label
            className='required text-gray-600 dark:text-gray-400'
            htmlFor='email'
          >
            Email
          </Label>
          <Input
            className='border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
            id='email'
            placeholder='Enter your email'
            required
          />
        </div>
        {/* <div className='flex items-end space-x-2 space-y-2'>
          <div className='w-1/12 space-y-2'>
            <Label
              className='required text-gray-600 dark:text-gray-400'
              htmlFor='prefix'
            >
              Prefix
            </Label>
            <Select
              className='w-full border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
              id='prefix'
              required
            >
              <SelectTrigger>
                <SelectValue placeholder='Select a prefix' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='+1'>
                    <img
                      alt='US Flag'
                      className='mr-2 inline-block'
                      height={20}
                      src='/placeholder.svg'
                      style={{ aspectRatio: '20/20', objectFit: 'cover' }}
                      width={20}
                    />
                    (+1)
                  </SelectItem>
                  <SelectItem value='+44'>
                    <img
                      alt='UK Flag'
                      className='mr-2 inline-block'
                      height={20}
                      src='/placeholder.svg'
                      style={{ aspectRatio: '20/20', objectFit: 'cover' }}
                      width={20}
                    />
                    (+44)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='w-3/4 space-y-2'>
            <Label
              className='required text-gray-600 dark:text-gray-400'
              htmlFor='phone'
            >
              Phone Number
            </Label>
            <Input
              className='border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
              id='phone'
              placeholder='Enter your phone number'
              required
            />
          </div>
        </div> */}
        <div className='space-y-2'>
          <Label
            className='required text-gray-600 dark:text-gray-400'
            htmlFor='message'
          >
            Message
          </Label>
          <textarea
            className='w-full border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800'
            defaultValue='I would like to receive more information'
            id='message'
            placeholder='Type your message'
            required
            rows={4}
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox
            className='text-gray-600 dark:text-gray-400'
            id='agreement'
            required
          />
          <Label
            className='text-sm font-normal text-gray-600 dark:text-gray-400'
            htmlFor='agreement'
          >
            I agree to the
            <button className='text-gray-600 underline underline-offset-2 dark:text-gray-400'>
              Terms & Conditions
            </button>
          </Label>
        </div>
        <Button
          className='w-full bg-gray-300 text-black dark:bg-gray-700 dark:text-white'
          type='submit'
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
