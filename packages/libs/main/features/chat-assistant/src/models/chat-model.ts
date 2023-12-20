import { OpenAI } from 'openai';
import { Run } from 'openai/src/resources/beta/threads/runs/runs';
import {
  ActionCallbackType,
  visitorRequestArgs,
  ToolOutputResponse,
} from '../types/types';
import { MessageDto } from './message-dto';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const retrieveAssistant = async () => {
  try {
    const assistant = await openai.beta.assistants.retrieve(
      process.env.REACT_APP_OPENAI_ASSISTANT_ID as string
    );
    return assistant;
  } catch (error) {
    console.error('Error retrieving assistant:', error);
    throw error;
  }
};

export const createThread = async () => {
  try {
    const thread = await openai.beta.threads.create();
    return thread;
  } catch (error) {
    console.error('Error creating thread:', error);
    throw error;
  }
};

export const createNewMessage = (content: string, isUser: boolean) => {
  try {
    const newMessage = new MessageDto(isUser, content);
    return newMessage;
  } catch (error) {
    console.error('Error creating new message:', error);
    throw error;
  }
};

export const createMessage = async (threadId: string, input: string) => {
  try {
    const message = await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: input,
    });
    return message;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
};

export const getMessageList = async (threadId: string) => {
  try {
    const messageList = await openai.beta.threads.messages.list(threadId);
    return messageList;
  } catch (error) {
    console.error('Error getting message list:', error);
    throw error;
  }
};

export const createRun = async (threadId: string, assistantId: string) => {
  try {
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
    return run;
  } catch (error) {
    console.error('Error creating run:', error);
    throw error;
  }
};

export const retrieveRun = async (threadId: string, runId: string) => {
  try {
    const run = await openai.beta.threads.runs.retrieve(threadId, runId);
    return run;
  } catch (error) {
    console.error('Error retrieving run:', error);
    throw error;
  }
};

export const waitOnRun = async (
  threadId: string,
  run: Run,
  actionCallbacks: ActionCallbackType<visitorRequestArgs>[]
) => {
  try {
    while (
      run.status === 'in_progress' ||
      run.status === 'queued' ||
      run.status === 'requires_action'
    ) {
      console.log('waiting...');
      console.log(run.status);
      if (run.status === 'requires_action') {
        const functionName =
          run.required_action?.submit_tool_outputs.tool_calls[0].function.name;
        const actionCallback = actionCallbacks.find(
          (actionCallback) => actionCallback.name === functionName
        );

        if (actionCallback) {
          run = await execRunAction(threadId, run, actionCallback);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
      run = await retrieveRun(threadId, run.id);
    }
  } catch (error) {
    console.error('Error in waitOnRun:', error);
    throw error;
  }
  return run;
};

export const execRunAction = async (
  threadId: string,
  run: Run,
  actionCallback: ActionCallbackType<visitorRequestArgs>
): Promise<Run> => {
  try {
    const toolCall = run.required_action?.submit_tool_outputs.tool_calls[0];
    console.log(toolCall);

    const args = JSON.parse(toolCall?.function.arguments || '');
    console.log('args');
    console.log(args);

    const functionResponse = actionCallback(args);
    const toolOutputs = {
      tool_outputs: [
        {
          tool_call_id: toolCall?.id || '',
          output: JSON.stringify(functionResponse),
        },
      ],
    };
    return submitToolOutputs(threadId, run.id, toolOutputs);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const submitToolOutputs = async (
  threadId: string,
  runId: string,
  toolOutputs: ToolOutputResponse
): Promise<Run> => {
  const functionalRun = await openai.beta.threads.runs.submitToolOutputs(
    threadId,
    runId,
    toolOutputs
  );
  console.log(functionalRun);
  return functionalRun;
};
